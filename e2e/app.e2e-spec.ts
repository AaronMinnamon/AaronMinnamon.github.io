import { AaronMinnamon.Github.IoPage } from './app.po';

describe('aaron-minnamon.github.io App', () => {
  let page: AaronMinnamon.Github.IoPage;

  beforeEach(() => {
    page = new AaronMinnamon.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
