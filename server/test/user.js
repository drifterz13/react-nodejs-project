process.env.NODE_ENV = 'test'

const mongoose = require('mongoose')
const server = require('../index')
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = require('chai').should()
const User = require('../models/User')

chai.use(chaiHttp)

describe('Database connection', () => {
  before((done) => {
    mongoose.connect('mongodb://localhost/test_db')
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error'))
    db.once('open', () => done())
  })

  describe('Testing Database', () => {
    it('should saved to test database', (done) => {
      const testUser = User({
        username: 'test',
        email: 'test@test.com',
        password: 'test'
      })
      testUser.save(done)
    })

    it('should not save incorrect format to database', (done) => {
      const wrongTestUser = User({
        name: 'test',
        hobby: 'test'
      })
      wrongTestUser.save((err, user) => {
        should.exist(err)
        done()
      })
    })

    it('should retrieve data from test database', (done) => {
      User.findOne({ email: 'test@test.com' }, (err, user) => {
        should.not.exist(err)
        should.exist(user)
        done()
      })
    })

    it('should update test data', (done) => {
      User.findOne({ email: 'test@test.com' }, (err, user) => {
        if (err) throw err
        if (user) {
          user.preferences = {
            language: 'EL',
            timezone: '-6.0',
            currency: 'DZD',
            profileType: 'all',
            messageType: 'follow',
            categoryType: 'enable'
          }
          user.save((err, data) => {
            const { preferences } = data
            should.not.exist(err)
            should.exist(data)
            data.should.be.an('object')
            data.should.have.property('preferences')
            preferences.language.should.equal('EL')
            preferences.timezone.should.equal('-6.0')
            preferences.currency.should.equal('DZD')
            preferences.profileType.should.equal('all')
            preferences.messageType.should.equal('follow')
            preferences.categoryType.should.equal('enable')
            done()
          })
        }
      })
    })
  })

  describe('/POST signup', () => {
    it('it should not signup a user without email', (done) => {
      let user = {
        username: 'test',
      }
      chai.request(server)
        .post('/auth/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(404)
          res.body.should.be.a('object')
          res.body.should.have.property('error')
          done()
        })
    })

    it('it should signup user', (done) => {
      let user = {
        username: 'example',
        email: 'example@example.com',
        password: 'example'
      }
      chai.request(server)
        .post('/auth/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('username')
          res.body.should.have.property('email')
          res.body.should.have.property('_id')
          res.body.should.have.property('token')
          res.body.username.should.equal('example')
          res.body.email.should.equal('example@example.com')
          done()
        })
    })
  })

  describe('/POST login', () => {
    it('should not login with invalid user', (done) => {
      const user = {
        email: 'test99@test.com',
        password: 'test99'
      }
      chai.request(server)
        .post('/auth/signin')
        .send(user)
        .end((err, res) => {
          res.should.have.status(404)
          res.body.should.be.a('object')
          res.body.should.have.property('error')
          done()
        })
    })

    it('should logged in', (done) => {
      const user = {
        email: 'test@test.com',
        password: 'test'
      }
      chai.request(server)
        .post('/auth/signin')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property('username')
          res.body.should.have.property('email')
          res.body.should.have.property('_id')
          res.body.should.have.property('token')
          res.body.username.should.equal('test')
          res.body.email.should.equal('test@test.com')
          done()
        })
    })
  })

  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done)
    })
  })
})
