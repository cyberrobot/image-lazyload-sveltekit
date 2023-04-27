import sharp from 'sharp';
import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const res = await fetch(
		`https://res.cloudinary.com/dxsogfhc1/image/upload/v1681853834/cld-sample-3.jpg`
	);
	const buffer = await res.arrayBuffer();
	const data = await sharp(Buffer.from(buffer))
		.resize(998, 667, {
			fit: 'cover',
			position: 'center'
		})
		.webp()
		.toBuffer();

	if (res.ok) {
		return {
			props: {
				image: data.toString('base64')
			}
		};
	}

	throw error(404, `Could not load ${res.url}`);
}
