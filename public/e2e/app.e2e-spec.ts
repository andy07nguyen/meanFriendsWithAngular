import { ModDemoPage } from './app.po';

describe('mod-demo App', () => {
  let page: ModDemoPage;

  beforeEach(() => {
    page = new ModDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
