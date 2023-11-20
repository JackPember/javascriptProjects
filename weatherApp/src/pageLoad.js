const loadPage = () => {
  const content = document.createElement('div');
  content.id = 'content';
  const header = document.createElement('h2');
  header.textContent = 'Whatever the Weather';
  const location = document.createElement('label');
  location.textContent = 'Enter your city, zipcode, or IP address: ';
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'userInput';
  const submitBtn = document.createElement('button');
  submitBtn.id = 'getData';
  submitBtn.textContent = 'Get Data';
  const output = document.createElement('h3');
  output.id = 'output';
  output.textContent = '';
  content.appendChild(header);
  content.appendChild(location);
  content.appendChild(input);
  content.appendChild(submitBtn);
  content.appendChild(output);
  document.body.appendChild(content);
};

export default loadPage;
