import { useRef, useState } from "react";
import MoreDotVertical from "@/components/svg/more-dot-vertical";
import { useClickAway } from "react-use";
import { MoreOverlayMenu } from "@/components/more-overlay-menu";

type T_MoreOptionCell = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    row: any;
    onEdit?: boolean;
    onView?: boolean;
    onDelete?: boolean;
};

export default function MoreOptionCell({
    row,
    onDelete = true,
    onEdit = true,
    onView = true,
}: T_MoreOptionCell) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    useClickAway(menuRef, () => setMenuOpen(false));

    const handleView = (id: string) => {
        console.log("View record for ID:", id);
        // Add navigation or modal logic here
    };

    const handleEdit = (id: string) => {
        console.log("Edit record for ID:", id);
        // Add form or navigation logic here
    };

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this record?")) {
            console.log("Delete record for ID:", id);
            // Perform API call or state update
        }
    };

    return (
        <div className="relative">
            <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="flex items-center rounded-md p-2 hover:bg-gray-100"
            >
                <MoreDotVertical className="text-gray-600" />
            </button>
            {menuOpen && (
                <div ref={menuRef}>
                    <MoreOverlayMenu
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onView={onView ? () => handleView(row.original as any) : undefined}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onEdit={onEdit ? () => handleEdit(row.original as any) : undefined}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onDelete={onDelete ? () => handleDelete(row.original as any) : undefined}
                    />
                </div>
            )}
        </div>
    );
}
