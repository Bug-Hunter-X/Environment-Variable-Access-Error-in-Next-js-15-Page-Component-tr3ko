```javascript
// pages/about.js

export async function getStaticProps() {
  return {
    props: {
      apiKey: process.env.MY_API_KEY,
    },
  };
}
export default function About({ apiKey }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>{apiKey}</p>
    </div>
  );
}
```