FROM ruby:3.3

# Install dependencies (adjust as needed)
# RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

# Set working directory
WORKDIR /app

# Copy your project files
COPY . /app

# Install gems (skip test/dev ones if needed)
RUN bundle install

# Set default command
CMD ["bundle", "exec", "nanoc", "compile"]
