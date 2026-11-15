import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review';

@Injectable()
export class ReviewsService {
  private readonly reviews: Review[] = [
    { id: 1, author: 'Sarah Jenkins', rating: 5, comment: 'Order arrived super fast! The noise-canceling headphones are exceptional quality.', createdAt: new Date().toISOString() },
    { id: 2, author: 'Michael Chen', rating: 5, comment: 'Great customer support and high-quality materials. Will definitely purchase again.', createdAt: new Date().toISOString() },
    { id: 3, author: 'Emma Watson', rating: 4, comment: 'Love the shoes! Very comfortable for daily walks and stylish as well.', createdAt: new Date().toISOString() },
  ];

  findAll(): Review[] {
    return [...this.reviews];
  }

  create(createReviewDto: CreateReviewDto): Review {
    const review: Review = {
      id: Date.now(),
      ...createReviewDto,
      createdAt: new Date().toISOString(),
    };

    this.reviews.unshift(review);
    return review;
  }
}
