import Image from "next/image";
import profileImg from '../../assets/philip.jpg';

export function Picture() {
  return (
    <div className="relative inline-block">
      <Image
        src={profileImg}
        alt="Philip Ghering"
        className="size-32 md:size-48 rounded-full object-cover"
        width={192}
        height={192}
        priority
      />
    </div>
  )
}

export default Picture;