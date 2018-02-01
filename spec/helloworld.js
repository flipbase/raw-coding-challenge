
const req = require('supertest');
const fs = require('fs');
const app = require('./../app/index');
const John = require('./../fixtures/John.json')
const Karen = require('./../fixtures/Karen.json')





describe('GET /hello-world', () => {
  it('should return a JSON object with the property `hello` and value `world`', (done) => {
    req(app).get('/hello-world').end((err, res) => {
      expect(res.body).to.have.property('hello')
      expect(res.body.hello).to.equal('world');
      done(err)
    })
  })
})

describe('GET /hello-to-admins-only', (done) => {
  it('should return a 401 status code when no `username` and `password` are provided in the body of the request', (done) => {
    req(app).get('/hello-to-admins-only')
      .send({})
      .expect(401)
      .end(done)    
  })

  it('should deny access for the user John and return a 401 status code', (done) => {
    req(app).get('/hello-to-admins-only')
      .send({username: John.username, password: John.username})
      .expect(401)
      .end(done)
  })

  
  it('should allow access for Karen and return a 200 status code, plus return JSON object with the `message` property and value `Hello Karen` ', (done) => {
    req(app).get('/hello-to-admins-only')
      .send({username: Karen.username, password: Karen.username})
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.have.property('message')
        expect(res.body.message).to.equal('Hello Karen')
      })
  })
})

describe('GET /download-video', () => { 
  // You can download the "Bunny" video here: https://s3.eu-central-1.amazonaws.com/flipbase-coding-challenge/bunny.mp4
  it('should start downloading the "Bunny" video and place it in the directory as /video/bunny.mp4', (done) => {
    let path = './videos/bunny.mp4'

    // Add some cleaning up if the video is already there before we started downloading
    if (fs.existsSync(path))
      fs.unlinkSync(path)

    // Now we can start downloading the file and check if its there
    req(app).get('/download-video').expect(200).end((err, res) => {
      const doesVideoExists = fs.existsSync(path);
      expect(doesVideoExists).to.equal(true);
    })
  })
})

describe('GET /transcode-video', () => {
  it('should encode', () => {
    let path = './videos/transcoded_bunny.webm'

    // Add some cleaning up if the video is already there before we started downloading
    if (fs.existsSync(path))
      fs.unlinkSync(path)

    req(app).get('transcode-video').expect(200).end((err, res) => {
      const doesTranscodedVideoExists = fs.existsSync(path);
      expect(doesTranscodedVideoExists).to.equal(true);
    })
  })
})