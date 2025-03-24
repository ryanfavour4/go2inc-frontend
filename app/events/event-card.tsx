import Modal from "@/components/modal";
import { useModal } from "@/components/modal/useModal";
import Logo from "@/components/svg/logo";
// import PenEdit from "@/components/svg/pen-edit";
// import TrashDelete from "@/components/svg/trash-delete";
import { formatDate } from "@/utils/format-date";

type EventCardProps = {
    name: string;
    location: string;
    expectedParticipants: number | string;
    date: Date | string;
};

export function EventCard({ date, expectedParticipants, location, name }: EventCardProps) {
    const { closeModal, isModalClosed } = useModal();

    return (
        <>
            <div className="relative h-fit w-full overflow-hidden rounded-lg border border-primary bg-white p-4 shadow">
                <Logo
                    className={`absolute -bottom-8 -right-8 h-40 w-40 -rotate-45 opacity-20 md:-bottom-12 md:-right-12 md:h-56 md:w-56`}
                />

                <div className="flex flex-col gap-2 border-b-2 pb-4">
                    <div className="flex items-center gap-1">
                        <h4 className="font-medium">Name:</h4>
                        <p>{name}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <h4 className="font-medium">Location:</h4>
                        <p>{location}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <h4 className="font-medium">Expected Participants:</h4>
                        <p>{Number(expectedParticipants)?.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <h4 className="font-medium">Date:</h4>
                        <p>{formatDate(date as string).commaDateFormat}</p>
                    </div>
                </div>

                {/* <div className="flex items-center gap-3 pt-4">
                    <button onClick={openModal} className="btn w-fit p-1.5 text-2xl text-secondary">
                        <PenEdit />
                    </button>
                    <button className="btn w-fit p-1.5 text-2xl text-secondary">
                        <TrashDelete />
                    </button>
                </div> */}
            </div>
            <Modal closeModal={closeModal} isModalClosed={isModalClosed}>
                <EventEditModal />
            </Modal>
        </>
    );
}

function EventEditModal() {
    return <div>EventEditModal</div>;
}
