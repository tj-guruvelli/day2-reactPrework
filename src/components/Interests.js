function Interests(props) {
  return (
    <li class="transition duration-500 text-black ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-white shadow rounded-lg overflow-hidden">
      <img alt={props.alt} 
      class="w-full" 
      src={require(`../imgs/${props.pic}`).default}
      />
      <div class="p-4">
        <h2 class="font-bold">{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </li>
  );
}

export default Interests;
