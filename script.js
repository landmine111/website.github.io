function posalji() {
  const imeIgrice = document.getElementById('ulaz').value;

  fetch("https://discord.com/api/webhooks/1369083011013804113/TdyZcNPZp785VuMwTRZtlJSdDQHO7j8o-S5jY_CvgQ6DNk2Al7snCp2QqoQVDXlz2DAV", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: `Prijedlog za Igricu: ${imeIgrice}`
    }),
  });
}
