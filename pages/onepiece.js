import Image from 'next/image';


export default function OnePiecePage() {
    return <div style={{
        position: "relative",
        width: "100%",
        height: "100vh", 
        overflow: "hidden", 
  }}>
      <Image
        src="/onepiece.png"
        alt="One Piece"
        layout="fill"
        objectFit="cover"
      />
  </div>;
}
