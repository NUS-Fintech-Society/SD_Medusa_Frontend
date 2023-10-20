import { Card, CardBody } from "@chakra-ui/react";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
interface CardProps {
  logo: "email" | "location";
  title: string;
  desc: string[];
}

function ContactCard(cardProps: CardProps) {
  const svg =
    cardProps.logo === "email" ? (
      <HiOutlineMail
        style={{ color: "#F9A72B", width: "70px", height: "88px" }}
      />
    ) : (
      <HiOutlineLocationMarker
        style={{ color: "#F9A72B", width: "70px", height: "88px" }}
      />
    );

  return (
    <Card
      maxW="sm"
      className="bg-white text-black flex flex-col justify-between items-center rounded-[20px] w-[487px] h-[210px]"
    >
      {svg}
      <CardBody>
        <h3 className="font-bold">{cardProps.title}</h3>
      </CardBody>
      <div className="font-[20px] h-[80px] text-center">
        {cardProps.desc.map((x) => (
          <p>{x}</p>
        ))}
      </div>
    </Card>
  );
}

export default ContactCard;
