// NEXT
import { AppProps } from 'next/app'

// DEPENDENCIES
import {
	App,
	Scaffold,
	AppBar,
	Text,
	SlideNav,
	Navigation,
	Placement,
	Meta,
	AppBarStyles,
	SlideNavStyles,
	TextStyles,
	FontWeight,
	Load,
	Theme,
	Font,
	FontFamily,
	Colors,
} from 'libraries/prometheus'

function Strive({ Component: component, pageProps }: AppProps) {
	return App({
		head: Meta({
			title: 'Strive',
			description: 'Track your progress - Achieve your goals!',
		}),
		body: Scaffold({
			appBar: AppBar({
				title: Text({
					value: 'Strive',
					style: TextStyles({
						fontSize: 1.5,
						fontWeight: FontWeight.extraBold,
						fontFamily: FontFamily('Poppins'),
						color: Colors.lightGreenAccent[400],
					}),
					component: 'h2',
				}),
				style: AppBarStyles({ height: 4, elevation: 2 }),
			}),
			navigation: Navigation({
				placement: Placement.side,
				child: SlideNav({
					style: SlideNavStyles({ width: 4 }),
				}),
			}),
			content: Load({ page: component, props: pageProps }),
		}),
		fonts: [
			Font(
				'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
			),
			Font(
				'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
			),
		],
	})
}

export default Strive
