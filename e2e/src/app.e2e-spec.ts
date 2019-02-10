import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.sleep(4000);
    expect(page.getTitleText()).toEqual('Jaguar Car List!');
  });

  it("should display in mobile view format", ()=>{
    browser.manage().window().setSize(320, 680);
    page.navigateTo();
    browser.sleep(4000);
    expect(page.getTitleText()).toEqual('Jaguar Car List!');
  })
});
