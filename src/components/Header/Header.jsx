import { InputSearch } from "./InputSearch/InputSearch";
import { Logo } from "./Logo/Logo";

export function Header() {
    return (
        <header>
            <nav>
                <Logo />
                <InputSearch />
            </nav>
        </header>
    );
}
