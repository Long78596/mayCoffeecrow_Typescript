export interface FooterLink {
    to:string;
    label:string;
}

export interface FooterSection {
    title:string;
    links:FooterLink[];
}