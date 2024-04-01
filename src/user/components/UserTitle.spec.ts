import { render } from '@testing-library/vue';
import UserTitle from './UserTitle.vue';

describe('[Component] Given UserTitle model', () => {
  
  describe('When is mounted without default slot', () => {
    render(UserTitle, {
      slots: {
        default: 'Test title'
      }
    })

    it('Then it should render title', () => {
      const title = document.querySelector('h2');
      expect(title?.textContent).toBe('Test title');
    })
  })

  describe('When is mounted with default slot', () => {
    render(UserTitle, {
      slots: {
        default: ''
      }
    })

    it('Then it should render title', () => {
      const title = document.querySelector('h2');
      expect(title?.textContent).toBeUndefined();
    })
  })
})
