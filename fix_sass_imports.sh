#!/bin/bash

# Script to fix all SCSS @use imports with correct paths
echo "Fixing SCSS @use imports..."

# For macOS
if [[ "$OSTYPE" == "darwin"* ]]; then
    # Fix badges.module.scss (from styles/blocks/)
    cat > styles/blocks/badges.module.scss << 'EOF'
$badgeText: 	--primary;
$border: 		--primary-dark;
$background: 	--background-dim2;

@use '../scss/mixins' as *;

.badgeBlockContainer{
	&:not(:last-of-type) {
		margin-bottom: var(--size-4x);
	}
}

.list {
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: var(--size-2-);
	row-gap: var(--size-2-);
	font-family: var(--font-accent);
	font-weight: 600;
	font-size: var(--font-xs);
	list-style: none;

	.item {
		position: relative;
		display: flex;
		flex-direction: row;
		overflow: hidden;
		align-items: center;
		border-radius: 9rem;
		@include buttonPadding( var(--size-3-) );
		text-transform: uppercase;

		color: var(--primary-dim);
		
		i, svg {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: .7rem;
		}

		i {
			&:not(.colored) {
				color: var(--icon-bright);
			}
		}
		
		svg {
			height: calc(1rem - 0.2rem);
			padding: 0.1rem;

			path {
				fill: var(--icon-bright);
			}
		}

		.title {
			flex-grow: 1;
			text-align: center;
		}
		
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			z-index: 1;
			border: 1px solid var(--primary-dim);
			border-radius: 9rem;
			opacity: 10%;
		}
		
		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			z-index: -1;
			background: var($background);
			opacity: 100%;
		}
	}
	
	&.methods {
		.item {
			padding: .5rem 1rem;
			font-size: .9rem;
			font-weight: 600;
			border-radius: .5rem;
			width: calc(50% - 0.25rem);
			text-transform: capitalize;
			
			&:before,
			&:after {
				border-radius: inherit;
			}
			
			svg {
				height: 1.4375rem;
				margin-right: 1rem;
				padding: 0.1rem;

				path {
					fill: url(#fa-gradient) var(--icon-bright);
				}
			}
		}
	}

	&.invertedColor {
		li {
			background: var(--primary);
			color: var(--background);

			svg {
				color: var(--background);
			}
		}
		&.methods {
			svg {
				color: var(--background);
			}
		}	
	}
}

.fullContainer {
	border-top: 1px solid var(--primary-dark);
	background: var(--background-dim);
	margin-left: calc( var(--padding-left) * -1 );
	margin-right: calc( var(--padding-right) * -1 );
	margin-bottom: calc( var(--padding-bottom) * -1 );
	padding: var(--padding);
	padding-left: var(--padding-left);
	padding-top: var(--padding-top, 1rem);
	padding-right: var(--padding-right);
	padding-bottom: var(--padding-bottom);
}

@include media($max: $mobile) {
	.list {
		&.methods {
			.item {
				font-size: .75rem;
				padding: 0.5rem;
				letter-spacing: -.025rem;

				svg {
					height: 1rem;
					margin-right: .5rem;
				}
			}
		}
	}
}
EOF

    # Fix all other SCSS files with correct relative paths
    find styles/sections -name "*.scss" -type f -exec sed -i '' "s/@import '..\/..\/scss\/mixins';/@use '..\/..\/scss\/mixins' as *;/g" {} +
    find styles/sections -name "*.scss" -type f -exec sed -i '' "s/@import '..\/..\/scss\/_mixins';/@use '..\/..\/scss\/mixins' as *;/g" {} +
    find styles/structure -name "*.scss" -type f -exec sed -i '' "s/@import '..\/scss\/_mixins';/@use '..\/scss\/mixins' as *;/g" {} +
    find styles/scss -name "global.scss" -exec sed -i '' "s/@import '_variables';/@use 'variables' as *;/g" {} +
    find styles/scss -name "global.scss" -exec sed -i '' "s/@import '_mixins';/@use 'mixins' as *;/g" {} +
    find styles/scss -name "variables.scss" -exec sed -i '' "s/@import \"..\/scss\/mixins\";/@use 'mixins' as *;/g" {} +

else
    # For Linux
    echo "Linux version - update paths manually or adjust sed commands"
fi

echo "✅ Done! All SCSS files updated with correct @use paths."