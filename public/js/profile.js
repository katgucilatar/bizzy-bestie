const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#shop-name').value.trim();
  
    if (name) {
      const response = await fetch(`/api/shops`, {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create shop');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/shops/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/shop');
      } else {
        alert('Failed to delete shop');
      }
    }
  };
  
  document
    .querySelector('.new-shop-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.shop-list')
    .addEventListener('click', delButtonHandler);