import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { Froles } from "@/lib/font";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="absolute top-0 left-10 z-50 p-12">
      <Sheet>
        <SheetTrigger className={`${Froles.className} text-7xl text-white`}>SL</SheetTrigger>
        <SheetContent side={"top"} className="bg-primary">
          <SheetHeader>
            <VisuallyHidden asChild>
              <SheetTitle>Header</SheetTitle>
            </VisuallyHidden>
            <Nav />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
