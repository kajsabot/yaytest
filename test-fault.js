/*∷YAY⟨C-b21b-1⟩
  unit: add
  lang: js
  in: { a: number, b: number }
  out: number
  pure: yes
  ensures: out === a + b
  intent: Returns the sum of two numbers.
  risk: low
⟧*/
/*∷YAY-END⟨C-b21b-1⟩*/
function add(a, b) {
  // Intentionally wrong implementation — the spec says addition,
  // but this returns subtraction. The gate should catch this as RED.
  return a - b;
}
