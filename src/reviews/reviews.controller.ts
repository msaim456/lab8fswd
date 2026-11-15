import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  findAll(): Review[] {
    return this.reviewsService.findAll();
  }

  @Post()
  create(@Body() createReviewDto: CreateReviewDto): Review {
    return this.reviewsService.create(createReviewDto);
  }
}
