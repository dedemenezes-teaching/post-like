if @like.persisted?
  json.likes render(partial: "likes/like", formats: :html, locals: {post: @like.post})
else
  json.quebrou 'posrra'
end
