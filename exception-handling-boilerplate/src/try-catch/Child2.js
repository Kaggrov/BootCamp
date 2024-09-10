import Fallback2 from "./FallBackChild2";

export default function Child2({ locality }) {
  // Implement Try-Catch block
  // thus Fallback2 component is rendered when error exists in Child2 component
  // Else renders locality
  try {
    if (!locality) {
      throw new Error("Locality Not Provided");
    }
    return (
      <div>
        <h1>In locality: {locality.toUpperCase()}</h1>
      </div>
    );
  } catch (error) {
    return <Fallback2 />;
  }
}
