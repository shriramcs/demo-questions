import { RankAssessmentPage } from './app.po';

describe('rank-assessment App', () => {
  let page: RankAssessmentPage;

  beforeEach(() => {
    page = new RankAssessmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
