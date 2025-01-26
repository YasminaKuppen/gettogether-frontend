//
// const form = document.getElementById('dataForm');
//
// form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//
//
//     const formData = new FormData(form);
//     const data = {
//         username: formData.get('username'),
//         email: formData.get('email'),
//         password: formData.get('password'),
//     };
//
//     try {
//
//         const response = await fetch('/api/registration', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });
//
//         if (!response.ok) {
//             throw new Error(`Fout bij versturen: ${response.status}`);
//         }
//
//         const result = await response.json();
//         console.log('Response van server:', result);
//
//         alert('Data succesvol verzonden!');
//     } catch (error) {
//         console.error('Fout:', error);
//         alert('Er is een fout opgetreden bij het verzenden van de data.');
//     }
// });
