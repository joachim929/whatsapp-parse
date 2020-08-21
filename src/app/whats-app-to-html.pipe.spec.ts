import {WhatsAppToHtmlPipe} from './whats-app-to-html.pipe';

describe('WhatsAppToHtmlPipe', () => {
  const pipe = new WhatsAppToHtmlPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    describe('<strong>', () => {
      it('should format to <strong> tags', () => {
        expect(pipe.transform('123 *ab*')).toEqual('123 <strong>ab</strong>');
      });
      it('should format to <strong> tags', () => {
        expect(pipe.transform('*ab*')).toEqual('<strong>ab</strong>');
      });
      it('shouldn\'t format to <strong> tags', () => {
        expect(pipe.transform('* * *')).toEqual('* * *');
      });
    });

    it('should format to <i> tags', () => {
      expect(pipe.transform('_ab_')).toEqual('<i>ab</i>');
    });
    it('shouldn\'t format to <i> tags', () => {
      expect(pipe.transform('_ ab_')).toEqual('_ ab_');
    });
    it('should wrap letters and between letters in <i> tags', () => {
      expect(pipe.transform('_a__a_')).toEqual('<i>a__a</i>');
    });
  });
});
