import { ItPage } from './app.po';

describe('it App', () => {
  let page: ItPage;

  beforeEach(() => {
    page = new ItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
