import { useEffect, useState } from "react";

const LikePokemon = ({index}) => {
  const [text, setText] = useState('');


  useEffect(()=> {
    setText(isPokemonLiked(index))
  }, [index])

  const likedArray = () => {
    return sessionStorage.getItem("liked")
    ? JSON.parse(sessionStorage.getItem("liked"))
    : [];
  }
  const likePokemon = () => {
    let liked = likedArray();

    const isLiked = liked.includes(index);
    if (isLiked) {
      liked = liked.filter((item) => item !== index);
      setText("Like");
    } else {
      liked.push(index);
      setText("Dislike");
    }

    sessionStorage.setItem("liked", JSON.stringify(liked));
  };

  const isPokemonLiked = (index) => {
    const liked = sessionStorage.getItem("liked")
      ? JSON.parse(sessionStorage.getItem("liked"))
      : [];

    const isLiked = liked.includes(index);
    return isLiked ? "Dislike" : "Like";
  };

  const bgColor= () => {
    const isLiked = likedArray().includes(index);
    if(isLiked) {
        return 'text-red-800'
    } else{
        return 'text-gray-800'
    }
  }

  return (
    <div
      className={` bg-gray-300 hover:bg-gray-600 ${bgColor()} w-20 center mx-auto`}
      key={`like-${index}`}
    >
      <button onClick={() => likePokemon()}>{text}</button>
    </div>
  );
};

export default LikePokemon
