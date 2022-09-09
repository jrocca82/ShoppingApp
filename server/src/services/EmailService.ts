import { DocumentDefinition } from "mongoose";
import { I_UserDocument } from "../models/user.models";

const sendEmail = (user: DocumentDefinition<I_UserDocument>, token: string) => {
	console.log(
		`[Email Service.sendEmail] To login as ${user.email} go to http://localhost:3000/auth/${token}`
	);
};

export default sendEmail;
