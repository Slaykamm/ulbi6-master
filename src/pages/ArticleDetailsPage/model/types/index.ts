import { ArticleDetailsPageCommentsRecomendationsSchema } from './ArticleDetailsPageCommentsRecomendationsSchema';
import { ArticleDetailsPageCommentsSchema } from './ArticleDetailsPageCommentsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsPageCommentsSchema;
    recomendations: ArticleDetailsPageCommentsRecomendationsSchema;
}
