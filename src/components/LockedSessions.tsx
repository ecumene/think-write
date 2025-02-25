import React from "react";
import parse from "html-react-parser";
import * as Collapsible from "@radix-ui/react-collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function LockedSessions({ sessions }) {
  const lockedSessions = sessions.map((session) => {
    const { sessionId, text, lockedUntil } = session;
    return (
      <div className="break-words p-2" key={sessionId}>
        <p>Session number: {sessionId}</p>
        <p>Locked until: {lockedUntil}</p>
        {parse(text)}
      </div>
    );
  });

  const [open, setOpen] = React.useState(false);
  if (sessions.length > 0) {
    return (
      <Collapsible.Root
        className="w-[80%] self-center"
        open={open}
        onOpenChange={setOpen}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Collapsible.Trigger asChild>
            <button className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center shadow-[0_2px_10px] shadow-blackA7 outline-none data-[state=closed]:bg-white data-[state=open]:bg-violet3 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black">
              {open ? <Cross2Icon /> : <RowSpacingIcon />}
            </button>
          </Collapsible.Trigger>
        </div>

        <div className="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7">
          <span className="text-violet11 text-[15px] leading-[25px]">
            Locked Sessions: {sessions.length}
          </span>
        </div>

        <Collapsible.Content className="select-none">
          {lockedSessions}
        </Collapsible.Content>
      </Collapsible.Root>
    );
  } else {
    // do nothing
  }
}
