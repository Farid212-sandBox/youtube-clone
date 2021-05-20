import React from 'react'
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	Divider
} from '@material-ui/core'

import {
	Home as HomeIcon,
	Explore as ExploreIcon,
	Subscriptions as SubscriptionsIcon,
	VideoLibrary as VideoLibraryIcon,
	History as HistoryIcon,
	MusicNote as MusicIcon,
	Sports as SportsIcon,
	SportsEsports as GamingIcon,
	LocalMoviesRounded as MovieIcon,
	EmojiObjectsRounded as LearningIcon,
	WifiTetheringRounded as LiveIcon,
	AddCircleRounded as AddIcon,
	ThreeDRotationRounded as ThreeDIcon,
	YouTube as YouTubeIcon,
	LibraryBooks as NewsIcon,
	LiveTv as LiveTvIcon,
	Settings as SettingsIcon,
	Flag as FlagIcon,
	Help as HelpIcon,
	Feedback as FeedbackIcon

} from '@material-ui/icons'

import { Link } from 'react-router-dom'

export const mainListItems = (
	<div>
		<Link to="/" style={{textDecoration: "none", color: "inherit"}}>
			<ListItem button>
				<ListItemIcon>
					<HomeIcon />
				</ListItemIcon>
				<ListItemText primary="Home" />
			</ListItem>
		</Link>
		<Link to="/feed/explore" style={{textDecoration: "none", color: "inherit"}}>
			<ListItem button>
				<ListItemIcon>
					<ExploreIcon />
				</ListItemIcon>
				<ListItemText primary="Explore" />
			</ListItem>
		</Link>
		<Link to="/feed/subscriptions" style={{textDecoration: "none", color: "inherit"}}>
			<ListItem button>
				<ListItemIcon>
					<SubscriptionsIcon />
				</ListItemIcon>
				<ListItemText primary="Subscriptions" />
			</ListItem>
		</Link>
		<Link to="/feed/library" style={{textDecoration: "none", color: "inherit"}}>
			<ListItem button>
				<ListItemIcon>
					<VideoLibraryIcon />
				</ListItemIcon>
				<ListItemText primary="Library" />
			</ListItem>
		</Link>
		<Link to="/feed/history" style={{textDecoration: "none", color: "inherit"}}>
			<ListItem button>
				<ListItemIcon>
					<HistoryIcon />
				</ListItemIcon>
				<ListItemText primary="History" />
			</ListItem>
		</Link>
	</div>
)

export const secondListItems = (
	<div>
		<ListSubheader inset>BEST OF YOUTUBE</ListSubheader>

		<ListItem button>
			<ListItemIcon>
				<MusicIcon />
			</ListItemIcon>
			<ListItemText primary="Music" />
		</ListItem>

		<ListItem button>
			<ListItemIcon>
				<SportsIcon />
			</ListItemIcon>
			<ListItemText primary="Sports" />
		</ListItem>

		<ListItem button>
			<ListItemIcon>
				<GamingIcon />
			</ListItemIcon>
			<ListItemText primary="Gaming" />
		</ListItem>

		<ListItem button>
			<ListItemIcon>
				<MovieIcon />
			</ListItemIcon>
			<ListItemText primary="Movie & Show" />
		</ListItem>

		<ListItem button>
			<ListItemIcon>
				<NewsIcon />
			</ListItemIcon>
			<ListItemText primary="News" />
		</ListItem>

		<ListItem button>
			<ListItemIcon>
				<LiveIcon />
			</ListItemIcon>
			<ListItemText primary="Live" />
		</ListItem>

		<ListItem button>
			<ListItemIcon>
				<LearningIcon />
			</ListItemIcon>
			<ListItemText primary="Learning" />
		</ListItem>

		<ListItem button>
			<ListItemIcon>
				<YouTubeIcon />
			</ListItemIcon>
			<ListItemText primary="Spotlight" />
		</ListItem>

		<ListItem button>
			<ListItemIcon>
				<ThreeDIcon />
			</ListItemIcon>
			<ListItemText primary="360 Video" />
		</ListItem>

		<Divider />

		<ListItem button>
			<ListItemIcon>
				<AddIcon />
			</ListItemIcon>
			<ListItemText primary="Browse Channel" />
		</ListItem>

		<Divider />

		<ListSubheader>MORE FROM YOUTUBE-CLONE</ListSubheader>

		<ListItem button>
			<ListItemIcon>
				<YouTubeIcon />
			</ListItemIcon>
			<ListItemText primary="Premium" />
		</ListItem>

		<ListItem button>
			<ListItemIcon>
				<LiveTvIcon />
			</ListItemIcon>
			<ListItemText primary="Live" />
		</ListItem>

		<Divider />

		<ListItem button>
			<ListItemIcon>
				<SettingsIcon />
			</ListItemIcon>
			<ListItemText primary="Settings" />
		</ListItem>

		<ListItem button>
			<ListItemIcon>
				<FlagIcon />
			</ListItemIcon>
			<ListItemText primary="Report history" />
		</ListItem>

		<ListItem button>
			<ListItemIcon>
				<HelpIcon />
			</ListItemIcon>
			<ListItemText primary="Help" />
		</ListItem>

		<ListItem button>
			<ListItemIcon>
				<FeedbackIcon />
			</ListItemIcon>
			<ListItemText primary="Send feedback" />
		</ListItem>

		<Divider />
	</div>
)
