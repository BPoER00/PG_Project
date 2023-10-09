import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("pgDataSecretCookie");

  if (!jwt && request.nextUrl.pathname === "/Login")
    return NextResponse.next(new URL("/Login", request.url));

  if (jwt && request.nextUrl.pathname === "/Login")
    return NextResponse.redirect(new URL("/Dashboard", request.url));

  if (jwt && request.nextUrl.pathname === "/Login")
    return NextResponse.redirect(new URL("/Dashboard", request.url));

  try {
    const { payload } = await jwtVerify(
      jwt.value,
      new TextEncoder().encode("pgDataSecret")
    );

    const currentTime = Math.floor(Date.now() / 1000);
    if (payload.exp <= currentTime) {
      return NextResponse.redirect(new URL("/Login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }
}

export const config = {
  matcher: [
    "/Login",
    "/Asignacion",
    "/Dashboard",
    "/Familia",
    "/Persona",
    "/TipoDocumento",
  ],
};
