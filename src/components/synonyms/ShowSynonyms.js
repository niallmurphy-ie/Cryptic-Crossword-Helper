import React, { Fragment } from 'react';

const ShowSynonyms = ({ synonyms, handleLength }) => {
	const synsArray = [];
	// const length = synonyms.length;
	const length = synonyms.synonymLength;

	for (const s in synonyms.synonymData) {
		 // Filter by length
		 const synonymsArray = synonyms.synonymData[s].filter(
			  // Replace punctuation so multiple words match length
			  (syn) =>
					syn.replace(/[.,\/#!$%\^&\*;:{}'=\-—_`~()]/g, '').length ===
					length
		 );
		 // Sort by length
		 synonymsArray.sort(function (a, b) {
			  return a.length - b.length;
		 });
		 // Create fragment Array
		 synsArray.push(
			  <Fragment key={'synonym_' + synonyms[s]}>
					<div className="crossword__clue__text">
						 <strong>{s}: </strong> {synonymsArray.join(', ')}
					</div>
			  </Fragment>
		 );
	}
	// Synonyms Length Text
	let synonymsLengthText = '';
	synonyms.synonymLength
		 ? (synonymsLengthText = `Characters: ${synonyms.synonymLength}`)
		 : (synonymsLengthText = 'Characters: 0');

	return (
		 <div>
			  <div>
					<b>Synonyms: </b>
					<button onClick={() => handleLength('decrease')}> - </button>
					<button onClick={() => handleLength('increase')}> + </button>
					<span> {synonymsLengthText}</span>
			  </div>
			  {synsArray.map((s) => (
					<div>{s}</div>
			  ))}
		 </div>
	);
};

export default ShowSynonyms;
