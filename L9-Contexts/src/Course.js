import { UserContext } from "./UserContext";
import { useContext } from "react";

export default function Course() {
    const { user } = useContext(UserContext);
    return <p>Your Course is {user.course}</p>
}