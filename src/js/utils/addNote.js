import brain from '../../../public/icons/brain-fill.svg';
import cart from '../../../public/icons/cart-fill.svg';
import lightbulb from '../../../public/icons/lightbulb-fill.svg';

const addNote = (notes) => {
  const name = document.querySelector('#FormControlInput1').value;
  const category = document.querySelector('#FormControlSelect1').value;
  const content = document.querySelector('#FormControlTextarea1').value;
  const icon =
    category === 'Task' ? cart : category === 'Idea' ? lightbulb : brain;
  notes.push({
    icon,
    name,
    created: new Date().toLocaleDateString('en-us', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }),
    category,
    content,
    dates: content.match(/\d{1,2}\/\d{1,2}\/\d{2,4}/g)?.join(', ') || '-',
  });
};

export default addNote;
