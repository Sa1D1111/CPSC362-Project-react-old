// import React from 'react';

// function CatBreedBox({ breedName, imageSrc, description }) {
//   return (
//     <div className="cat-breed-box">
//       <img
//         src={imageSrc}
//         alt={breedName}
//         style={{ width: '150px', height: 'auto' }} // Adjust the width as needed
//       />
//       <h3>{breedName}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

// export default CatBreedBox;



// // CatBreedBox.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// function CatBreedBox({ breedName, imageSrc, description }) {
//   return (
//     <Link to={`/description/${breedName}`}>
//       <div className="cat-breed-box">
//         <img src={imageSrc} alt={breedName} />
//         <h3>{breedName}</h3>
//         <p>{description}</p>
//       </div>
//     </Link>
//   );
// }

// export default CatBreedBox;






// CatBreedBox.js
import React from 'react';
import { Link } from 'react-router-dom';

function CatBreedBox({ breedName, imageSrc, description }) {
  return (
    <div className="cat-breed-box">
      <Link to={`/description/${breedName}`}>
        <img
          src={imageSrc}
          alt={breedName}
          style={{ width: '150px', height: 'auto' }} // Adjust the width as needed
        />
        <h3>{breedName}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default CatBreedBox;

