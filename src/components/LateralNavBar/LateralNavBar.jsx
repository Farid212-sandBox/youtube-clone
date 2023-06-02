import React from 'react'
import { Drawer, Divider, List} from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import './LateralNavBar.css'
import { mainListItems, secondListItems } from '../ListItems'


const useStyles = makeStyles((theme) => ({
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: 240,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9),
		},
	},
}))

export default function LateralNavBar(props) {
	const classes = useStyles()
	const open = props.open

	return (
		<div className="LateralNavBar">
			{console.log(open)}
			
		</div>
	)
}
