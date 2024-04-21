import { data } from "../SidebarMenuData";
import { ToggleTheme } from "../ToggleTheme";
import {
  Divider,
  SidebarAvatar,
  SidebarContainer,
  SidebarLink,
  SidebarLinkContainer,
  SidebarSocial,
  SidebarSocialLink,
  SidebarWrapper,
} from "./SidebarElements";

type TSidebarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
};

export const Sidebar = ({ open, setOpen, ...props }: TSidebarProps) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <SidebarContainer
      $open={open}
      aria-hidden={isHidden}
      {...props}
    >
      <SidebarWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <SidebarAvatar
            $open={open}
            $delay={0.5}
          >
            <img
              src={data.profilePic}
              alt="profilePic"
              width="100%"
              height="100%"
            />
            <figcaption>{data.devName}</figcaption>
          </SidebarAvatar>
          <SidebarSocial>
            {data.socialLinks.map((item, index) => {
              return (
                <SidebarSocialLink
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.title}
                  title={item.title}
                  $delay={index}
                  $open={open}
                >
                  {item.icon}
                </SidebarSocialLink>
              );
            })}
          </SidebarSocial>

          <Divider />
        </div>

        <SidebarLinkContainer>
          {data.menuLinks.map(({ id, title, path }) => {
            return (
              <SidebarLink
                key={id}
                to={path}
                tabIndex={tabIndex}
                onClick={() => setOpen(!open)}
              >
                {title}
              </SidebarLink>
            );
          })}
        </SidebarLinkContainer>

        <ToggleTheme />
      </SidebarWrapper>
    </SidebarContainer>
  );
};
