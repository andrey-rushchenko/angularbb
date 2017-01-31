import { AngularbbPage } from './app.po';

describe('angularbb App', function() {
  let page: AngularbbPage;

  beforeEach(() => {
    page = new AngularbbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
