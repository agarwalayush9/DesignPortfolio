"use client";

import { useEffect, useState } from "react";
import Blog from "./Blog";

export default function BlogClient() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return <Blog />;
}
