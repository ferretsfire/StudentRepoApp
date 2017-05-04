import { StudentRepoAppPage } from './app.po';

describe('student-repo-app App', () => {
  let page: StudentRepoAppPage;

  beforeEach(() => {
    page = new StudentRepoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
