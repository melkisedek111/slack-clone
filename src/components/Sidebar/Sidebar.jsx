import {
	Add,
	Apps,
	BookmarkBorder,
	Drafts,
	ExpandLess,
	ExpandMore,
	FileCopy,
	Inbox,
	InsertComment,
	PeopleAlt,
} from "@material-ui/icons";
import CreateIcon from "@material-ui/icons/Create";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import React from "react";
import SidebarOption from "../SidebarOption/SidebarOption";
import {
	SidebarContainer,
	SidebarHeader,
	SidebarInfo,
	SpinnerContainer,
} from "./sidebar.styles";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../../firebase";
import Spinner from "../../assets/spinner.svg";
import { useAuthState } from "react-firebase-hooks/auth";
const Sidebar = () => {
	const [channels, loading, error] = useCollection(db.collection("rooms"));
	const [user] = useAuthState(auth);
	return (
		<SidebarContainer>
			<SidebarHeader>
				<SidebarInfo>
					<h2>SLACK HQ</h2>
					<h3>
						<FiberManualRecordIcon />
						{user?.displayName}
					</h3>
				</SidebarInfo>
				<CreateIcon />
			</SidebarHeader>
			<SidebarOption Icon={InsertComment} title="Threads" />
			<SidebarOption Icon={Inbox} title="Mentions and Reactions" />
			<SidebarOption Icon={Drafts} title="Saved Items" />
			<SidebarOption Icon={BookmarkBorder} title="Channel Browsers" />
			<SidebarOption Icon={PeopleAlt} title="People and User groups" />
			<SidebarOption Icon={Apps} title="Apps" />
			<SidebarOption Icon={FileCopy} title="File Browser" />
			<SidebarOption Icon={ExpandLess} title="Show Less" />
			<hr />
			<SidebarOption Icon={ExpandMore} title="Channels" />
			<hr />

			<SidebarOption Icon={Add} addChannelOption title="Add Channels" />
			{channels ? (
				channels?.docs.map((doc) => (
					<SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
				))
			) : (
				<SpinnerContainer>
					<img src={Spinner} alt="loader" />
				</SpinnerContainer>
			)}
		</SidebarContainer>
	);
};

export default Sidebar;
