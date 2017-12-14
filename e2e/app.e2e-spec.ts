import { MusicrepPage } from './app.po';

describe('musicrep App', () => {
  let page: MusicrepPage;

  beforeEach(() => {
    page = new MusicrepPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
