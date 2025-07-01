import { defineApp, ErrorResponse } from "rwsdk/worker";
import { route, render, prefix, layout } from "rwsdk/router";
import { Document } from "@/app/Document";
import { HomePage } from "@/app/pages/HomePage";
import { setCommonHeaders } from "@/app/headers";
import { userRoutes } from "@/app/pages/user/routes";
import { sessions, setupSessionStore } from "./session/store";
import { Session } from "./session/durableObject";
import { type User, db, setupDb } from "@/db";
import { env } from "cloudflare:workers";
import { BlogIndex } from "@/app/pages/BlogIndex";
import { BlogPost } from "@/app/pages/BlogPost";
import { BaseLayout } from "./app/Layout";
export { SessionDurableObject } from "./session/durableObject";
import { TagsPage } from "@/app/pages/TagsPage";
import { TagPage } from "./app/pages/TagPage";
export type AppContext = {
  session: Session | null;
  user: User | null;
};

export default defineApp([
  setCommonHeaders(),
  async ({ ctx, request, headers }) => {
    await setupDb(env);
    setupSessionStore(env);

    try {
      ctx.session = await sessions.load(request);
    } catch (error) {
      if (error instanceof ErrorResponse && error.code === 401) {
        await sessions.remove(request, headers);
        headers.set("Location", "/user/login");

        return new Response(null, {
          status: 302,
          headers,
        });
      }

      throw error;
    }

    if (ctx.session?.userId) {
      ctx.user = await db.user.findUnique({
        where: {
          id: ctx.session.userId,
        },
      });
    }
  },
  render(Document, [
    layout(BaseLayout, [
      route("/", HomePage),
      route("/tags", TagsPage),
      route("/blog", BlogIndex),
      route("/blog/:slug", BlogPost),
      route("/tags/:tag", TagPage),
      prefix("/user", userRoutes),
    ]),
  ]),
]);
