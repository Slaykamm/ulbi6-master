export enum AppRoutes {
    ABOUT = 'about',
    ADMIN_PANEL = 'admin_panel',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    MAIN = 'main',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found',
    FORBIDDEN = 'forbidden',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.PROFILE]: '/profile/', // +id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // +'id'
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};
