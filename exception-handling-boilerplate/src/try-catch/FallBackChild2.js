export default function Fallback2({error}) {
    return (
        // Display message 'Fallback Page for Page-2` when error raises in Child2 component
       <h1>Fallback Page for Child2{error}</h1>

    )
}